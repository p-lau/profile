import client from '@sanity/client';

const sanityClient = client({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    token: import.meta.env.VITE_SANITY_TOKEN,
    apiVersion: '2021-08-31',
    useCdn: true,
});

export { sanityClient }