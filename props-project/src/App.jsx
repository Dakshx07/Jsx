
import Card from './components/Card'
import User from './components/User'


const App = () => {

  // const arr=[
  //   {user:'daksh',age:20},
  //   {user:'b7e',age:22},
  //   {user:'jsjk',age:77}
  // ]

  const arr=[10,20,30]

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: 120,
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: 95,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: 110,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: 130,
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Visual Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 140,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "UX Researcher",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: 80,
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Product UI Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: 125,
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "8 days ago",
    post: "UX Writer",
    tag1: "Part-Time",
    tag2: "Mid Level",
    pay: 90,
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "2 months ago",
    post: "Design Systems Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: 135,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "10 weeks ago",
    post: "Interaction Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 145,
    location: "Remote, India"
  }
];


  // arr.map(function(elem){
  //   console.log(elem);
    
  // })
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <Card key={idx} img={elem.brandLogo} company={elem.companyName} location={elem.location} pay={elem.pay} date={elem.datePosted} post={elem.post} TAG1={elem.tag1} TAG2={elem.tag2} />
      })}
    </div>
  )
}

export default App