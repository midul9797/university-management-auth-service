import User from './user.model'

const findLastCreatedId = async () => {
  const id = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return id
}
export const generateUserId = async () => {
  const prevID = (await findLastCreatedId()) || (0).toString().padStart(5, '0')
  const curID = (parseInt(prevID as string) + 1).toString().padStart(5, '0')
  return curID
}
