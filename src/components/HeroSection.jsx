import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center lg:mt-20">
  <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    Virtualr build tools 
    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> for developers</span>
  </h1>
  <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis,
     voluptas aperiam aliquid deserunt maxime perspiciatis numquam incidunt quas repellat facilis tenetur inventore nesciunt blanditiis. Obcaecati 
     blanditiis natus corrupti expedita alias cumque iure quae eius! Doloremque aliquid accusamus molestias, alias, pariatur quidem nihil velit aut
     distinctio possimus harum? Cupiditate magni voluptate fugiat harum totam fuga unde possimus. Enim quasi quos, inventore incidunt eos obcaecati? 
     Beatae optio libero error corporis dolore magni fugiat, cumque blanditiis, repudiandae reiciendis iure iusto aut deleniti dolores debitis 
    ipsum voluptatum quasi doloremque eos modi nesciunt facilis tenetur dolorem recusandae. Est harum dolores eaque? Sint, quas inventore.
  </p>
  <div className="flex justify-center my-10">
    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
      Start for free
    </a>
    <a href="#" className="py-3 px-4 mx-3 rounded-md border">
      Documentation
    </a>
  </div>

</div>
  )
}

export default HeroSection