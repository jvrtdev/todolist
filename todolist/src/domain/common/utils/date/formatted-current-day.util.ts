import { getMonth } from "./formatted-month.util"

export function FormattedCurrentDay(): string {
  const datetime = new Date()
  const date = datetime.toISOString().split("T")

  const currentDay = date[0].split("-").reverse()
  return `${currentDay[0]} ${getMonth(+currentDay[1])} ${currentDay[2]}`
}
