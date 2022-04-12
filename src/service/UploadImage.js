import axios from "axios";

const convertBase64 = (file) =>{

    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)

      fileReader.onload = () =>{
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) =>{
        reject(error)
      }
    })
  }

export const uploadImage = async (file) => {

    const base64 = await convertBase64(file)
    const img = base64.split(",").pop()

    let body = new FormData()
    body.set('key', "980b62aafbf76203e0fbc04422687cdf")
    body.append('image', img)

    const result = await axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body
    })

    return result.data.data.url
};

