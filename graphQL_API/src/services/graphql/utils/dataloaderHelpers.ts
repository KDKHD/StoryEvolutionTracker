
import { groupBy, map } from 'ramda'

export const mapGroupBy = (rows: any[], ids: number[] | string[], field: string): any[] => {
  const groupedById = groupBy((row) => row[field], rows)
  return map((id) => groupedById[id] || [], ids)
}

export const mapReduce = (rows: any[], ids: number[] | string[], field = 'id') => {
  const lookup: any = rows.reduce((acc, row) => {
    acc[row[field]] = row
    return acc
  }, {})
  return map((id: any) => lookup[id] || null, ids)
}