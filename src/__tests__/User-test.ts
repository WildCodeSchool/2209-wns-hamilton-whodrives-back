import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";
  
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://host.docker.internal:4000/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });
  
  const CREATE_USER = gql`
    mutation createUser($createUserArgs: MutationCreateUserArgs!) {
      createUser(createUserArgs: $createUserArgs) {
        username, 
        password: hashed, 
        email, 
        phone
      }
    }
  `;
  
  const LOGIN = gql`
    query Login($password: String!, $email: String!) {
      login(password: $password, email: $email) {
        success
        token
      }
    }
  `;
  
  const LIST_WILDERS = gql`
    query ListWilders {
      listWilders {
        success
        wilders {
          email
          last_name
          first_name
          age
        }
        message
      }
    }
  `;
  
  describe("Wilder resolver", () => {
    let password = "labite";
  
    it("créer wilder", async () => {
      const res = await client.mutate({
        mutation: CREATE_USER,
        variables: {
          createUserArgs: {
            username: 'Didier', 
            password, 
            email: 'didier@mail.com', 
            phone: '0558745856'
          },
        },
      });
  
      expect(res.data?.createWilder).toEqual({
        username: 'Didier', 
        password, 
        email: 'didier@mail.com', 
        phone: '0558745856'
      });
    });
    // it("avoir un token si le wilder est correct", async () => {
    //   const res = await client.query({
    //     query: LOGIN,
    //     variables: {
    //       password,
    //       email,
    //     },
    //     fetchPolicy: "no-cache",
    //   });
  
  
    //   expect(res.data?.login.success).toBeTruthy();
    //   expect(res.data?.login.token).toMatch(/^(?:[\w-]*\.){2}[\w-]*$/); //(^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$)
    //   token = res.data?.login.token;
    // });
    // it("obtenir des informations si le wilder est connecté", async () => {
    //   const res = await client.query({
    //     query: LIST_WILDERS,
    //     fetchPolicy: "no-cache",
    //     context: {
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       },
    //     },
    //   });
    
    //   expect(res.data?.listWilders.success).toBeTruthy();
    //   expect(res.data?.listWilders.wilders.length).toBeGreaterThan(0);
    // });
    });