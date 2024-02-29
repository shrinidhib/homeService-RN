import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clt77retv0o8707utk4he7rl1/master"

const getSlider=async()=>{
    const query = gql`
        query GetSliders {
            sliders {
            id
            name
            image {
                url
            }
            }
        }
      
    `
    const result=await request(MASTER_URL, query)
    return result

}

export default{
    getSlider
}
