import * as pluralize from "pluralize";

export function getPlural(str: any): string {
  return pluralize.plural(str);
}
