// Prefix a public asset path with the configured base (e.g. "/omar-portfolio").
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
