export default async function Page() {
  const { default: About } = await import(`@/contents/about.mdx`);

  return <About />;
}
export const dynamicParams = false;
