<template>
    <div ref="chartRef"
         class="chart-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import * as echarts from 'echarts'
import { useTheme } from '@ikol/ui-kit/composables/theme'

// Props:
// series: Array of arrays with numeric values, e.g. [[1,2,3],[2,4,6]]
// colors: Array of color strings, e.g. ['#6366f1', '#22c55e']
const props = defineProps({
    series: {
        type: Array,
        required: true,
    },
    colors: {
        type: Array,
        default: () => [],
    },
})

const chartRef = ref(null)
let chartInstance = null
let resizeObserver = null

// existing app theme composable
const theme = useTheme() // expected to expose `isDark`

const themeVars = computed(() => {
    return {
        text: '#' + theme.colors.value.content_neutral_strong_default,
        grid: '#' + theme.colors.value.border_neutral_regular_default,
        tooltipBg: '#' + theme.colors.value.background_neutral_strong_default,
    }
})

function formatQ (v) {
    return `${(v - 1) % 4 + 1}`;
}

const buildOption = () => ({
    color: props.colors,
    backgroundColor: 'transparent',
    grid: {
        top: 20,
        left: 10,
        right: 20,
        bottom: 10,
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: themeVars.value.tooltipBg,
        borderWidth: 0,
        textStyle: {
            color: themeVars.value.text,
            fontSize: 14,
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
        },
        formatter: (params) => {
            const name = `<div style="padding-bottom: 5px; font-weight: 600">Quarter ${formatQ(params[0].axisValue)}</div>`;
            return [
                name,
                ...params.map(p => {
                    return `<div>${p.marker} $${p.value.toFixed(2)}M</div>`;
                })
            ].join('');
        },
        padding: [12, 14],
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        },
        extraCssText: `
            border-radius: 16px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.35);
        `,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: themeVars.value.text, formatter: v => `Q${formatQ(v)}` },
        data: props.series[0]?.map((_, i) => i + 1) || [],
        axisPointer: {
            label: {
                backgroundColor: '#' + theme.colors.value.background_primary_solid_default,
                color: '#' + theme.colors.value.content_neutral_strong_on_primary,
                formatter: p => `Q${formatQ(p.value)}`
            }
        },
    },
    yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
            lineStyle: { color: themeVars.value.grid },
        },
        axisLabel: { color: themeVars.value.text, formatter: '${value}M' },
        axisPointer: {
            label: {
                backgroundColor: '#' + theme.colors.value.background_primary_solid_default,
                color: '#' + theme.colors.value.content_neutral_strong_on_primary,
                formatter: p => `$${p.value.toFixed(2)}M`
            }
        },

    },
    series: props.series.map((values) => ({
        type: 'line',
        data: values,
        smooth: true,
        showSymbol: false,
        lineStyle: {
            width: 3,
        },
        emphasis: {
            focus: 'series',
        },
        areaStyle: {
            opacity: 0.2,
        },
    })),
})

const renderChart = () => {
    if (!chartInstance) return
    chartInstance.setOption(buildOption(), true)
}

onMounted(() => {
    chartInstance = echarts.init(chartRef.value)
    renderChart()

    resizeObserver = new ResizeObserver(() => {
        chartInstance?.resize()
    })

    resizeObserver.observe(chartRef.value)
})

onBeforeUnmount(() => {
    resizeObserver?.disconnect()

    if (chartInstance) {
        chartInstance.dispose()
        chartInstance = null
    }
})

watch(
    () => [props.series, props.colors, theme.is_dark],
    renderChart,
    { deep: true }
)
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 264px;
}
</style>