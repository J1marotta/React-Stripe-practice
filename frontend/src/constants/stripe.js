const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_live_MY_PULISHABLE_KEY'
: 'pk_test_MY_TESTKEY';

export default STRIPE_PUBLISHABLE;
