export type FormInput = {
  name: string
  description: string
  price: string
}

export type ArrayBufferFile = string | ArrayBuffer | null

export type CreateItem = {
  formInput: FormInput
  file: ArrayBufferFile
}

export type CreateSale = {
  price: string
  url: string
}
