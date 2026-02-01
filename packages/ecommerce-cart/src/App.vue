<template>
    <div class="checkout-page">
        <!-- Header Navigation -->
        <header class="header ik-py-7">
            <IkFlex class="header-content ik-px-6"
                    spacing="8"
                    grow_fixed_grow>
                <div class="logo">
                    <IkLink to="/">
                        <span class="logo-text ik-text--display-sm ik-text--bold"
                              :class="{ 'logo-text--dark': theme.is_dark.value }">
                            Xample
                        </span>
                    </IkLink>
                </div>
                <IkFlex class="nav-links ik-text--semibold"
                        align="center"
                        spacing="8">
                    <IkLink to="/"
                            plain>Home</IkLink>
                    <IkLink to="/products"
                            plain>Products</IkLink>
                    <IkLink to="/about"
                            plain>About</IkLink>
                    <IkLink to="/contact"
                            plain>Contact</IkLink>
                </IkFlex>
                <IkFlex justify_end
                        spacing="3">
                    <ThemeSwitch />
                    <IkButton design="primary"
                              round>
                        Sign In
                    </IkButton>
                    <IkButton design="primary"
                              flat
                              icon="shopping-cart"
                              circle />
                </IkFlex>
            </IkFlex>
        </header>

        <!-- Main Content -->
        <main class="main-content ik-py-12">
            <div class="container ik-px-6">
                <h1 class="page-title ik-text--display-md ik-text--bold ik-mb-8">Checkout</h1>

                <IkGrid spacing_x="8"
                        spacing_y="8">
                    <!-- Checkout Form -->
                    <IkGridItem xxs-12
                                md-8>
                        <IkForm @ik-submit="handleSubmit"
                                class="checkout-form">
                            <!-- Customer Information -->
                            <section class="checkout-section">
                                <h2 class="section-title ik-text--display-xs ik-text--semibold ik-mb-6">
                                    <IkIcon icon="user"
                                            class="ik-mr-3" />
                                    Customer Information
                                </h2>

                                <IkGrid spacing_x="6"
                                        spacing_y="6">
                                    <IkGridItem xxs-12
                                                sm-6>
                                        <IkTextField v-model="formData.firstName"
                                                     label="First Name"
                                                     placeholder="John"
                                                     variant="outline"
                                                     required
                                                     autocomplete="given-name" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12
                                                sm-6>
                                        <IkTextField v-model="formData.lastName"
                                                     label="Last Name"
                                                     placeholder="Doe"
                                                     variant="outline"
                                                     required
                                                     autocomplete="family-name" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12>
                                        <IkTextField v-model="formData.email"
                                                     label="Email Address"
                                                     type="email"
                                                     placeholder="john.doe@example.com"
                                                     variant="outline"
                                                     required
                                                     autocomplete="email" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12>
                                        <IkTextField v-model="formData.phone"
                                                     label="Phone Number"
                                                     type="tel"
                                                     placeholder="+1 (555) 123-4567"
                                                     variant="outline"
                                                     required
                                                     autocomplete="tel" />
                                    </IkGridItem>
                                </IkGrid>
                            </section>

                            <IkDivider class="ik-my-8" />

                            <!-- Shipping Address -->
                            <section class="checkout-section">
                                <h2 class="section-title ik-text--display-xs ik-text--semibold ik-mb-6">
                                    <IkIcon icon="map-marker-alt"
                                            class="ik-mr-3" />
                                    Shipping Address
                                </h2>

                                <IkGrid spacing_x="6"
                                        spacing_y="6">
                                    <IkGridItem xxs-12>
                                        <IkTextField v-model="formData.address"
                                                     label="Street Address"
                                                     placeholder="123 Main Street"
                                                     variant="outline"
                                                     required
                                                     autocomplete="street-address" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12>
                                        <IkTextField v-model="formData.address2"
                                                     label="Apartment, suite, etc. (optional)"
                                                     placeholder="Apt 4B"
                                                     variant="outline"
                                                     autocomplete="address-line2" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12
                                                sm-6>
                                        <IkTextField v-model="formData.city"
                                                     label="City"
                                                     placeholder="New York"
                                                     variant="outline"
                                                     required
                                                     autocomplete="address-level2" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12
                                                sm-6>
                                        <IkSelectField v-model="formData.state"
                                                       label="State / Province"
                                                       :items="states"
                                                       text_key="name"
                                                       value_key="code"
                                                       placeholder="Select state"
                                                       variant="outline"
                                                       required />
                                    </IkGridItem>
                                    <IkGridItem xxs-12
                                                sm-6>
                                        <IkTextField v-model="formData.zipCode"
                                                     label="ZIP / Postal Code"
                                                     placeholder="10001"
                                                     variant="outline"
                                                     required
                                                     autocomplete="postal-code" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12
                                                sm-6>
                                        <IkSelectField v-model="formData.country"
                                                       label="Country"
                                                       :items="countries"
                                                       text_key="name"
                                                       value_key="code"
                                                       placeholder="Select country"
                                                       variant="outline"
                                                       required />
                                    </IkGridItem>
                                </IkGrid>
                            </section>

                            <IkDivider class="ik-my-8" />

                            <!-- Payment Information -->
                            <section class="checkout-section">
                                <h2 class="section-title ik-text--display-xs ik-text--semibold ik-mb-6">
                                    <IkIcon icon="credit-card"
                                            class="ik-mr-3" />
                                    Payment Information
                                </h2>

                                <IkGrid spacing_x="6"
                                        spacing_y="6">
                                    <IkGridItem xxs-12>
                                        <IkSelectField v-model="formData.paymentMethod"
                                                       label="Payment Method"
                                                       :items="paymentMethods"
                                                       text_key="name"
                                                       value_key="value"
                                                       placeholder="Select payment method"
                                                       variant="outline"
                                                       required />
                                    </IkGridItem>
                                    <IkGridItem xxs-12
                                                v-if="formData.paymentMethod === 'card'">
                                        <IkTextField v-model="formData.cardNumber"
                                                     label="Card Number"
                                                     placeholder="1234 5678 9012 3456"
                                                     variant="outline"
                                                     required
                                                     autocomplete="cc-number"
                                                     maxlength="19" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12
                                                sm-6
                                                v-if="formData.paymentMethod === 'card'">
                                        <IkTextField v-model="formData.cardExpiry"
                                                     label="Expiry Date"
                                                     placeholder="MM/YY"
                                                     variant="outline"
                                                     required
                                                     autocomplete="cc-exp"
                                                     maxlength="5" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12
                                                sm-6
                                                v-if="formData.paymentMethod === 'card'">
                                        <IkTextField v-model="formData.cardCvv"
                                                     label="CVV"
                                                     placeholder="123"
                                                     type="password"
                                                     variant="outline"
                                                     required
                                                     autocomplete="cc-csc"
                                                     maxlength="4" />
                                    </IkGridItem>
                                    <IkGridItem xxs-12>
                                        <IkTextareaField v-model="formData.notes"
                                                         label="Order Notes (optional)"
                                                         placeholder="Special instructions for your order..."
                                                         variant="outline"
                                                         :rows="3" />
                                    </IkGridItem>
                                </IkGrid>
                            </section>
                        </IkForm>
                    </IkGridItem>

                    <!-- Order Summary -->
                    <IkGridItem xxs-12
                                md-4>
                        <div class="order-summary">
                            <h2 class="summary-title ik-text--display-xs ik-text--semibold ik-mb-6">Order Summary</h2>

                            <div class="summary-items">
                                <div v-for="item in orderItems"
                                     :key="item.id"
                                     class="summary-item ik-mb-6">
                                    <IkFlex spacing="4"
                                            align="start">
                                        <IkImage :src="item.image"
                                                 :alt="item.name"
                                                 cover
                                                 class="item-image" />
                                        <IkFlex direction="column"
                                                spacing="2"
                                                grow>
                                            <span class="item-name ik-text--md ik-text--semibold">{{ item.name }}</span>
                                            <span class="item-category ik-text--sm ik-text--upper">{{ item.category
                                            }}</span>
                                            <IkFlex justify_space
                                                    align="center">
                                                <span class="item-quantity ik-text--sm">Qty: {{ item.quantity }}</span>
                                                <span class="item-price ik-text--md ik-text--semibold">${{ item.price
                                                }}.00</span>
                                            </IkFlex>
                                        </IkFlex>
                                    </IkFlex>
                                </div>
                            </div>

                            <IkDivider class="ik-my-6" />

                            <div class="summary-totals">
                                <IkFlex justify_space
                                        class="ik-mb-3">
                                    <span class="ik-text--md">Subtotal</span>
                                    <span class="ik-text--md ik-text--semibold">${{ subtotal }}.00</span>
                                </IkFlex>
                                <IkFlex justify_space
                                        class="ik-mb-3">
                                    <span class="ik-text--md">Shipping</span>
                                    <span class="ik-text--md ik-text--semibold">${{ shipping }}.00</span>
                                </IkFlex>
                                <IkFlex justify_space
                                        class="ik-mb-3">
                                    <span class="ik-text--md">Tax</span>
                                    <span class="ik-text--md ik-text--semibold">${{ tax }}.00</span>
                                </IkFlex>
                                <IkDivider class="ik-my-4" />
                                <IkFlex justify_space>
                                    <span class="ik-text--lg ik-text--bold">Total</span>
                                    <span class="ik-text--xl ik-text--bold">${{ total }}.00</span>
                                </IkFlex>
                            </div>

                            <IkDivider class="ik-my-8" />

                            <!-- Terms and Conditions -->
                            <div>
                                <IkCheckboxField v-model="formData.acceptTerms"
                                                 hide_label>
                                    <div class="ik-text--xs ik-pt-2">
                                        I agree to the Terms and Conditions
                                    </div>
                                </IkCheckboxField>
                            </div>

                            <!-- Submit Button -->
                            <IkButton design="primary"
                                      size="lg"
                                      round
                                      append_icon="arrow-right"
                                      class="ik-mt-8 submit-button"
                                      @click="handleSubmit">
                                Complete Order
                            </IkButton>
                        </div>
                    </IkGridItem>
                </IkGrid>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer ik-py-10 ik-mt-16">
            <div class="container ik-px-6">
                <IkFlex class="footer-content"
                        spacing="8">
                    <p class="footer-text ik-text--sm ik-ma-0">© 2026 Xample. All rights reserved.</p>
                    <IkFlex class="footer-links ik-text--semibold"
                            spacing="5">
                        <IkLink to="/privacy"
                                plain>Privacy</IkLink>
                        <IkLink to="/terms"
                                plain>Terms</IkLink>
                        <IkLink to="/shipping"
                                plain>Shipping</IkLink>
                    </IkFlex>
                </IkFlex>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { IkButton } from '@ikol/ui-kit/components/IkButton';
import { IkFlex } from '@ikol/ui-kit/components/IkFlex';
import { IkGrid, IkGridItem } from '@ikol/ui-kit/components/IkGrid';
import { IkImage } from '@ikol/ui-kit/components/IkImage';
import { IkLink } from '@ikol/ui-kit/components/IkLink';
import { IkIcon } from '@ikol/ui-kit/components/IkIcon';
import { IkForm } from '@ikol/ui-kit/components/IkForm';
import { IkTextField } from '@ikol/ui-kit/components/IkTextField';
import { IkSelectField } from '@ikol/ui-kit/components/IkSelectField';
import { IkTextareaField } from '@ikol/ui-kit/components/IkTextareaField';
import { IkCheckboxField } from '@ikol/ui-kit/components/IkCheckboxField';
import { IkDivider } from '@ikol/ui-kit/components/IkDivider';
import ThemeSwitch from './ThemeSwitch.vue';
import { provideTheme } from '@ikol/ui-kit/composables/theme';

interface OrderItem {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
}

interface Country {
    code: string;
    name: string;
}

interface State {
    code: string;
    name: string;
}

interface PaymentMethod {
    value: string;
    name: string;
}

const theme = provideTheme({
    colors: {
        NEUTRAL_WHITE: 'FFFFFF',
        NEUTRAL_BLACK: '000000',
        PRIMARY_50: 'F5FAF9',
        PRIMARY_100: 'E4F1EF',
        PRIMARY_200: 'ADFFF2',
        PRIMARY_300: '70FFE7',
        PRIMARY_400: '33FFDD',
        PRIMARY_500: '00FFD5',
        PRIMARY_600: '00D9B5',
        PRIMARY_700: '00B395',
        PRIMARY_800: '008C75',
        PRIMARY_900: '006655',
        PRIMARY_950: '004035',

        SECONDARY_50: 'F9F5FA',
        SECONDARY_100: 'F0E4F1',
        SECONDARY_200: 'FAADFF',
        SECONDARY_300: 'F570FF',
        SECONDARY_400: 'F133FF',
        SECONDARY_500: 'EE00FF',
        SECONDARY_600: 'CA00D9',
        SECONDARY_700: 'A700B3',
        SECONDARY_800: '83008C',
        SECONDARY_900: '5F0066',
        SECONDARY_950: '3C0040',

        NEUTRAL_50: 'F7F7F7',
        NEUTRAL_100: 'EBEBEB',
        NEUTRAL_200: 'D6D6D6',
        NEUTRAL_300: 'B8B8B8',
        NEUTRAL_400: '999999',
        NEUTRAL_500: '424242',
        NEUTRAL_600: '383838',
        NEUTRAL_700: '2E2E2E',
        NEUTRAL_800: '242424',
        NEUTRAL_900: '1D1818',
        NEUTRAL_950: '120F0F',
        SUCCESS_50: 'F5FAF7',
        SUCCESS_100: 'E4F1E9',
        SUCCESS_200: 'ADFFCB',
        SUCCESS_300: '70FFA5',
        SUCCESS_400: '33FF7E',
        SUCCESS_500: '00FF5E',
        SUCCESS_600: '00D950',
        SUCCESS_700: '00B342',
        SUCCESS_800: '008C34',
        SUCCESS_900: '006626',
        SUCCESS_950: '004018',
        WARNING_50: 'FAF9F5',
        WARNING_100: 'F1EEE4',
        WARNING_200: 'FFEDAD',
        WARNING_300: 'FFE070',
        WARNING_400: 'FFD333',
        WARNING_500: 'FFC800',
        WARNING_600: 'D9AA00',
        WARNING_700: 'B38C00',
        WARNING_800: '8C6E00',
        WARNING_900: '665000',
        WARNING_950: '403200',
        ERROR_50: 'FAF5F7',
        ERROR_100: 'F1E4E9',
        ERROR_200: 'FFADCE',
        ERROR_300: 'FF70A9',
        ERROR_400: 'FF3385',
        ERROR_500: 'FF0066',
        ERROR_600: 'D90057',
        ERROR_700: 'B30047',
        ERROR_800: '8C0038',
        ERROR_900: '660029',
        ERROR_950: '40001A',
    },
    settings: {
        typography: {
            letter_spacing: 0.5,
        },
        fonts: {
            default: {
                family: 'Roboto',
                weights: { bold: 700, normal: 400, semibold: 600 },
            },
        },
    },
});

// Form data
const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    notes: '',
    acceptTerms: false,
    saveInfo: false,
});

// Countries list
const countries = ref<Country[]>([
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'BE', name: 'Belgium' },
]);

// States list (US states example)
const states = ref<State[]>([
    { code: 'NY', name: 'New York' },
    { code: 'CA', name: 'California' },
    { code: 'TX', name: 'Texas' },
    { code: 'FL', name: 'Florida' },
    { code: 'IL', name: 'Illinois' },
    { code: 'PA', name: 'Pennsylvania' },
    { code: 'OH', name: 'Ohio' },
    { code: 'GA', name: 'Georgia' },
    { code: 'NC', name: 'North Carolina' },
    { code: 'MI', name: 'Michigan' },
]);

// Payment methods
const paymentMethods = ref<PaymentMethod[]>([
    { value: 'card', name: 'Credit / Debit Card' },
    { value: 'paypal', name: 'PayPal' },
    { value: 'apple', name: 'Apple Pay' },
    { value: 'google', name: 'Google Pay' },
]);

// Order items
const orderItems = ref<OrderItem[]>([
    {
        id: 1,
        name: 'Minimalist Watch',
        category: 'Accessories',
        price: 129,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    },
    {
        id: 2,
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: 199,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    },
    {
        id: 3,
        name: 'Leather Backpack',
        category: 'Bags',
        price: 249,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    },
]);

// Order summary calculations
const subtotal = computed(() => {
    return orderItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const shipping = computed(() => {
    return 15;
});

const tax = computed(() => {
    return Math.round(subtotal.value * 0.08);
});

const total = computed(() => {
    return subtotal.value + shipping.value + tax.value;
});

// Form submission
const handleSubmit = () => {
    console.log('Form submitted:', formData.value);
    // Handle form submission logic here
    alert('Order placed successfully!');
};
</script>

<style scoped>
.checkout-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--background-neutral-regular-default);
}

/* Header */
.header {
    background-color: var(--background-neutral-strong-default);
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid var(--border-neutral-light-default);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
}

.logo-text {
    background: linear-gradient(45deg, var(--background-primary-solid-default) 0%, var(--background-secondary-solid-default) 150%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
}

.logo-text--dark {
    background: linear-gradient(45deg, var(--background-primary-solid-default) 0%, var(--background-secondary-solid-default) 150%);
    -webkit-background-clip: text;
    background-clip: text;
}

.nav-links {
    font-size: var(--text-md);
}

/* Main Content */
.main-content {
    flex: 1;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.page-title {
    color: var(--content-neutral-strong-default);
}

/* Checkout Form */
.checkout-form {
    background-color: var(--background-neutral-strong-default);
    border-radius: var(--s-8);
    padding: var(--s-8);
    box-shadow: var(--shadow-neutral-sm);
}

.checkout-section {
    margin-bottom: var(--s-6);
}

.section-title {
    color: var(--content-neutral-strong-default);
    display: flex;
    align-items: center;
}

/* Order Summary */
.order-summary {
    background-color: var(--background-neutral-strong-default);
    border-radius: var(--s-8);
    padding: var(--s-8);
    position: sticky;
    top: 100px;
    box-shadow: var(--shadow-neutral-sm);
}

.summary-title {
    color: var(--content-neutral-strong-default);
}

.summary-items {
    margin-bottom: var(--s-6);
}

.summary-item {
    padding-bottom: var(--s-6);
    border-bottom: 1px solid var(--border-neutral-light-default);
}

.summary-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.item-image {
    width: 80px;
    height: 80px;
    border-radius: var(--s-2);
    flex-shrink: 0;
}

.item-name {
    color: var(--content-neutral-strong-default);
}

.item-category {
    color: var(--content-neutral-regular-default);
}

.item-quantity {
    color: var(--content-neutral-regular-default);
}

.item-price {
    color: var(--content-neutral-strong-default);
}

.summary-totals {
    padding-top: var(--s-4);
}

.submit-button {
    width: 100%;
}

/* Footer */
.footer {
    background-color: var(--background-neutral-strong-default);
    border-top: 1px solid var(--border-neutral-light-default);
    margin-top: auto;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-text {
    color: var(--content-neutral-regular-default);
}

.footer-links {
    font-size: var(--text-sm);
}

/* Responsive */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
    }

    .nav-links {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }

    .checkout-form {
        padding: var(--s-6);
    }

    .order-summary {
        position: static;
        margin-top: var(--s-8);
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }
}
</style>
