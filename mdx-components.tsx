import type { MDXComponents } from 'mdx/types'
import PlacementTestAnalytics from '@/components/PlacementTestAnalytics'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    PlacementTestAnalytics,
  }
}
