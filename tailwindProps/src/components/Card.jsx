import React from 'react'
import PropTypes from 'prop-types';

function Card({username='A Woman', post='Standing on the beach holding a surfboard'}) {
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://plus.unsplash.com/premium_photo-1664369473200-96cf3c0fb1fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, incidunt?
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {username}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {post}
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}
Card.propTypes = {
    username: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
  };

export default Card