export const filterAcct = (accCreated, perAcc, accDetails, setFeedDetails, feedDetails, accounts) => {
  return (
    accCreated.filter((account) => {
      if(perAcc.email == account.email && perAcc.username !== account.username && accDetails.password == accDetails.conPass) {
        setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:''})
      } if(perAcc.email == account.email && perAcc.username !== account.username && accDetails.password !== accDetails.conPass) {
        setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:'Password not matching'}) 
      }
      
      if(perAcc.email !== account.email && perAcc.username == account.username && accDetails.password == accDetails.conPass) {
        setFeedDetails({...feedDetails, email:'', username:'Username already used', conPass:''})
      } if(perAcc.email !== account.email && perAcc.username == account.username && accDetails.password !== accDetails.conPass) {
        setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:'Password not matching'}) 
      }
      
      if(perAcc.email == account.email && perAcc.username == account.username && accDetails.password !== accDetails.conPass) {
        setFeedDetails({...feedDetails, email:'Email already used', username:'Username already used', conPass:'Password not matching'})
      } if(perAcc.email == account.email && perAcc.username == account.username && accDetails.password == accDetails.conPass) {
        setFeedDetails({...feedDetails, email:'Email already used', username:'Username already used', conPass:''}) 
      } if(perAcc.email !== account.email && perAcc.username !== account.username && accDetails.password !== accDetails.conPass) {
        setFeedDetails({...feedDetails, email:'', username:'', conPass:'Password not matching'}) 
      } 
      
      if(perAcc.email !== account.email && perAcc.username !== account.username && perAcc.password == perAcc.conPass) {
        accCreated.push(perAcc)
        localStorage.setItem(accounts, JSON.stringify(accCreated))
        setFeedDetails({...feedDetails, email:'', username:'', conPass:''}) 
      }
    })
  );
}