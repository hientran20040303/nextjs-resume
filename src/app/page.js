export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-[#006747] text-white py-12 px-6 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Hien Tran</h1>
        <div className="mt-4 max-w-2xl mx-auto border-t border-[#FDBB30] pt-4">
          <p className="text-xl font-semibold text-[#FDBB30]">University of South Florida</p>
          <p className="text-sm md:text-base opacity-90 mt-1">
            Business Analytics & Information Systems (Cybersecurity)
          </p>
          <p className="text-sm md:text-base opacity-90">
            Computational & Applied Mathematics (Data Analytics & Business Intelligence)
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto my-10 p-6 md:p-12 bg-white shadow-xl rounded-lg">
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#006747] border-b-2 border-[#FDBB30] pb-2 mb-4 uppercase tracking-wide">
            Contact Information
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-4 text-gray-700">
            <p><strong>Email:</strong> <a href="mailto:hienthuytran@usf.edu" className="text-blue-700 hover:underline">hienthuytran@usf.edu</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hientran2005/" target="_blank" className="text-blue-700 hover:underline">linkedin.com/in/hientran2005/</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/hientran20040303" target="_blank" className="text-blue-700 hover:underline">github.com/hientran20040303</a></p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#006747] border-b-2 border-[#FDBB30] pb-2 mb-6 uppercase tracking-wide">
            Introduction
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed text-gray-700">
              <p>
                I am a junior pursuing dual degrees in Business Analytics & Information Systems and Mathematics, 
                with the goal of becoming an actuary. I enjoy working with complex datasets, challenging 
                assumptions, and designing models that are both statistically sound and practically useful.
              </p>
              <p>
                Through internships and applied projects, I have practiced analytical work, from cleaning 
                and organizing data to building and evaluating predictive models. I care a lot about model 
                accuracy, understanding risk, and explaining numbers in a clear, practical way that helps 
                others make informed decisions.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/DSC_0492.jpg" 
                alt="Hien Tran" 
                className="rounded-lg shadow-lg border-4 border-gray-100 max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#006747] border-b-2 border-[#FDBB30] pb-2 mb-4 uppercase tracking-wide">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {['Statistical Modeling', 'Financial Analysis', 'Risk Assessment', 'Data Cleaning', 'Predictive Modeling'].map((skill) => (
              <span key={skill} className="bg-gray-100 text-[#006747] px-4 py-1 rounded-full border border-gray-200 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

      </main>

      <footer className="bg-[#006747] text-white py-8 text-center border-t-4 border-[#FDBB30]">
        <p className="font-medium">Hien Tran | University of South Florida</p>
      </footer>
    </div>
  );
}