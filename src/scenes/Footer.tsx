import Logo from "@/assets/Logo.png";


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 md:mt-6">
      <div className="justify-between mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Enim fuga sequi, magnam rerum obcaecati natus facilis mollitia tenetur 
            architecto voluptates itaque accusamus labore odit illo animi eum eius 
            nesciunt ipsum.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p><h4>Links</h4>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div><div></div>
      </div>
    </footer>
  )
}

export default Footer