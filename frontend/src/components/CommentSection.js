import React from 'react';

const CommentSection = () => {
  return (
    <div className="border-t pt-10 border-gray-400 px-4 md:px-0 w-full md:w-1/2 mx-auto container grid">
      <h3 className="text-gray-900 font-bold text-3xl">Comments (10)</h3>
      <div className="grid gap-4 w-full">
        <form className="space-y-4 pt-6">
          <textarea className="bg-white shadow-sm rounded-2xl w-full p-2" placeholder="Add to discussion" rows="5"/>
          <button className="bg-[#4338ca] px-6 py-3 text-white rounded-2xl">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
