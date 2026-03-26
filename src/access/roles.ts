import type { Access } from 'payload'

// Roles that can delete — developer and alhuzaifa-admin only
export const canDelete: Access = ({ req: { user } }) => {
  if (!user) return false
  return user.role === 'developer' || user.role === 'admin'
}

// Any logged-in user can read
export const isLoggedIn: Access = ({ req: { user } }) => {
  return Boolean(user)
}
