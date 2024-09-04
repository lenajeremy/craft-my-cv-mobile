export const slugify = (st: string) => st.split(' ').join('-').toLowerCase()
export const unslugify = (st: string) => st.split('-').join(' ')
export const capitalize = (st: string) => st.charAt(0).toUpperCase() + st.slice(1)
export const toTitleCase = (st: string) => st.split(' ').map(s => capitalize(s)).join(' ')