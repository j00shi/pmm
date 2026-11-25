const rawBase = import.meta.env.BASE_URL || '/';
const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

export function url(path: string): string {
  if (!path || path === '/') {
    return `${base}/`;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export function normalizePath(pathname: string): string {
  const withoutBase = base && pathname.startsWith(base)
    ? pathname.slice(base.length) || '/'
    : pathname;
  if (withoutBase.length > 1 && withoutBase.endsWith('/')) {
    return withoutBase.slice(0, -1);
  }
  return withoutBase;
}
