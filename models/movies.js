import mongoose from 'mongoose'

const netflixSchema = new mongoose.Schema({
  id: {
    type: Number,
   
  },
  name: {
    type: String,
   
  },
  type: {
    type: String,
  
  },
  logo_100px: {
    type: String,

  },
  ios_appstore_url: {
    type: String,
 
  },
  android_playstore_url: {
    type: String,
   
  },
  android_scheme: {
    type: String,
 
  },
  ios_scheme: {
    type: String,
  
  },
  regions: {
    type: [String],
   
  }
});

const Netflix = mongoose.model('Netflix', netflixSchema);

export default Netflix;
