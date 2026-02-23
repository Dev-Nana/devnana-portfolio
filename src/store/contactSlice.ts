import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import emailjs from "@emailjs/browser"

interface ContactState {
  loading: boolean
  success: boolean
  error: string | null
}

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
}

export const sendContactEmail = createAsyncThunk(
  "contact/sendEmail",
  async (form: HTMLFormElement, { rejectWithValue }) => {
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )

      return true
    } catch (err) {
      return rejectWithValue("Algo deu errado. Tente novamente.")
    }
  }
)

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.success = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactEmail.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(sendContactEmail.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(sendContactEmail.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { resetContactState } = contactSlice.actions
export default contactSlice.reducer
