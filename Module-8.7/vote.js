const age = 22;
// const age = 17;
// const hasVoterIdCard = true;
const hasVoterIdCard = false;

if(age >= 18){
    if(hasVoterIdCard){
        console.log('Vote for the cold.');
    }
    else{
        console.log('Get your voter ID card to vote');
    }
}
else{
    console.log('Grow up, KID.');
}