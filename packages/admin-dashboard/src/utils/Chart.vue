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
    if (theme.is_dark.value) {
        return {
            text: '#d1d5db',
            grid: '#374151',
            tooltipBg: '#111827',
        }
    }

    return {
        text: '#6b7280',
        grid: '#e5e7eb',
        tooltipBg: '#ffffff',
    }
})

const buildOption = () => ({
    color: props.colors,
    backgroundColor: 'transparent',
    grid: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: themeVars.value.tooltipBg,
        borderWidth: 0,
        textStyle: {
            color: themeVars.value.text,
        },
        axisPointer: {
            type: 'line',
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: themeVars.value.text, formatter: 'Q{value}' },
        data: props.series[0]?.map((_, i) => i + 1) || [],
    },
    yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
            lineStyle: { color: themeVars.value.grid },
        },
        axisLabel: { color: themeVars.value.text, formatter: '${value}M' },

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
            opacity: 0.1,
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
    height: 320px;
}
</style>