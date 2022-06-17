type EpochMap = [string, number]

const epochs: EpochMap[] = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
]

const getDuration = (timeAgoInSeconds: number) => {
  for (let [name, seconds] of epochs) {
    const interval = Math.floor(timeAgoInSeconds / seconds)
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: name,
      }
    }
  }
}

export const timeAgo = (date: Date) => {
  const timeAgoInSeconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  )
  const duration = getDuration(timeAgoInSeconds)

  if (!duration) return 'just now'

  const suffix = duration.interval === 1 ? '' : 's'
  return `${duration.interval} ${duration.epoch}${suffix} ago`
}
