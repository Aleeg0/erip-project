export function cn(
  ...args: Array<string | false | 0 | 0n | null | undefined>
) : string {
  return args
    .filter((arg) => arg && arg.trim().length > 0)
    .join(' ');
}