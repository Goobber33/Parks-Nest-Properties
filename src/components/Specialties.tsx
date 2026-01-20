import './Specialties.css'

const Specialties = () => {
  const specialties = [
    'FORECLOSURE AVOIDANCE',
    'DIVORCE/DEATH IN FAMILY',
    'BANKRUPTCY/JOB LOSS',
    'PROBATE',
    'DEBT REMOVAL',
    'OVER-LEVERAGED PROPERTIES',
    'RENEGOTIATION',
    'RELOCATION ASSISTANCE',
    'ENVIRONMENTAL/STRUCTURAL PROBLEMS',
    'TITLE ISSUES',
    'VACANT PROPERTIES',
    'JUDGMENTS OR OUTSIDE LIENS',
    'INHERITANCE',
    'BAD TENANT/REALTOR'
  ]

  return (
    <section id="specialties" className="specialties">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR SPECIALTIES</h2>
        </div>
        <div className="specialties-grid fadeInUp">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-item">
              <span className="specialty-icon">✓</span>
              <span className="specialty-text">{specialty}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialties
