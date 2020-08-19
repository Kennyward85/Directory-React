class User {
  
    // Creating are calls for Axios data for User
        constructor(user) {
            if (!user){
                return;
            }
            if (user.name) {
              this.firstName = user.name.first;
              this.lastName = user.name.last; 
            }
            this.email = user.email;
    
            if (user.location) {
              if (user.location.street) {
                const streetName = user.location.street.name;
                const streetNumber = user.location.street.number;
                this.street = streetNumber && streetName ? `${streetNumber} ${streetName};` : '';
              }
              this.city = user.location.city;
              this.state = user.location.state;
            }       
            this.phone = user.phone
        }   
    }
    export default User;