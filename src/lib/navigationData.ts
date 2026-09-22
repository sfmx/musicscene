import generatedNavData from '@/data/_generated/navigation-data.json';

export interface NavMenuItem {
  label: string;
  href: string;
  icon?: string;
}

export interface NavColumn {
  heading: string;
  headingHref?: string;
  items: NavMenuItem[];
}

export interface NavCategory {
  label: string;
  href: string;
  columns: NavColumn[];
  featured?: NavMenuItem[];
}

const navData: NavCategory[] = (generatedNavData as unknown as NavCategory[]) || [];

export function getNavigationData(): NavCategory[] {
  return navData;
}
