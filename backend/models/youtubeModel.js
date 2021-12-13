import mongoose from 'mongoose'

const youtubeSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Youtube = mongoose.model('Youtube', youtubeSchema)

export default Youtube
