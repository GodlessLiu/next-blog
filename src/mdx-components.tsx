import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: (props) => (
      <div className="markdown-body py-10 px-10 md:max-w-[700px] lg:max-w-[1000px] max-w-screen mx-auto">
        {props.children}
      </div>
    ),
  };
}
