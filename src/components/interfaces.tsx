export interface BarsInterface {
  bars: Array<Bar>
}

interface Bar {
  id: string,
  name: string,
  quadrant: string,
  district: string,
  address: string,
  dateNight: boolean,
  beer: string,
  food?: string,
  liquor?: string,
  time: string,
  days: string,
  website?: string
}

export interface BarProps {
  name: string,
  district: string,
  address: string,
  time: string,
  days: string,
  website?: string,
}