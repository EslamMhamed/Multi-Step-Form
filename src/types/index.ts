export type FormData = {
  personalInfo : {
    firstName: string,
    lastName: string,
    email: string,
  },
  addreesInfo : {
    street: string,
    city: string,
    zipCode: string,
  },
  preferences : {
    newsletter: boolean,
    notifications : boolean,
    theme: "light" | "dark"
  }
}


export type FormAction = {
  type: "UPDATE_PERSONAL_INFO",
  payload: Partial<FormData["personalInfo"]>
} | {
  type: "UPDATE_ADDRESS_INFO",
  payload: Partial<FormData["addreesInfo"]>
} | {
  type: "UPDATE_PREFERENCES",
  payload: Partial<FormData["preferences"]>
}
