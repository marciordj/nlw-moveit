const ExperienceBar = () => {
  return (
    <header className="experience-bar" >
      <span>0 exp</span>
      <div>
        <div style={{width: '50%'}} />

        <span className='current-experience' style={{left: '50%'}} > 50exp </span>
      </div>
      <span>100 exp</span>
    </header>
  )
}

export default ExperienceBar;