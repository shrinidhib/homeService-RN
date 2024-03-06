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

const GetCategories=async()=>{
    const query=gql`
        query GetCategory {
            categories {
            name
            id
            icon {
                url
            }
            }
        }
    `
    const result=await request(MASTER_URL, query)
    return result
}

const getBusinessList=async()=>{
    const query=gql`
    query getBusinessList {
        businessLists {
          about
          address
          contactPerson
          email
          id
          images {
            url
          }
          name
          category {
            name
          }
        }
      }
      `
    const result=await request(MASTER_URL, query)
    return result
}

const getBusinessListByCategory=async(category)=>{
    const query=gql`
        query getBusinessList {
            businessLists(where: {category: {name: "`+category+`"}}) {
            about
            address
            contactPerson
            email
            id
            images {
                url
            }
            name
            category {
                name
            }
            }
        }`
    const result=await request(MASTER_URL, query)
    return result

}

const createBooking=async(data)=>{
    const mutationQuery=gql`
    mutation createBooking {
        createBooking(
          data: {bookingStatus: Booked, 
            businessList: {connect: {id: "`+data.businessid+`"}},
             date: "`+data.date+`", 
             time: "`+data.time+`", 
             userEmail: "`+data.userEmail+`", 
             userName: "`+data.userName+`"}
        ) {
          id
        }
        publishManyBookings
      }
      `

      const result=await request(MASTER_URL, mutationQuery)
      return result
}

export default{
    getSlider,
    GetCategories,
    getBusinessList,
    getBusinessListByCategory,
    createBooking
}
