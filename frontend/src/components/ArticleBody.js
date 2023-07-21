import React from "react";

const ArticleBody = () => {

  const tags  = ["finance", "travel", "tech", "sport"]

  return (
    <div className="grid gap-4 px-4 md:px-0 w-full md:w-1/2 mx-auto container py-14">
      <p className="text-gray-400 text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        distinctio asperiores optio cum iusto corporis, a quod perferendis
        laudantium iste dolore vero rerum eligendi est id ullam, maiores ex
        minus alias doloremque libero hic? Iure quia explicabo, reiciendis
        voluptas expedita nemo ab ex laborum reprehenderit consectetur numquam
        suscipit a animi maiores, perspiciatis necessitatibus sit libero amet
        repellat aliquid! Asperiores magni, doloremque repudiandae, blanditiis
        porro id voluptas laboriosam ab, quod velit eius magnam culpa?
        Repellendus aspernatur distinctio, aliquid id, at facere temporibus,
        laboriosam perspiciatis quae doloribus error voluptatibus possimus unde
        omnis cumque dicta? Voluptatibus laudantium nihil perspiciatis, quidem,
        ad, possimus iure harum ratione excepturi illum debitis molestiae vero
        tenetur in nemo. Aliquam, autem. Sed delectus expedita aliquam, numquam,
        a natus voluptatem amet necessitatibus accusantium possimus inventore
        doloremque, rem consequuntur porro atque debitis aspernatur et quas sunt
        omnis? Neque fuga libero impedit vitae, magnam accusantium voluptatibus
        officiis quis atque fugit nemo ex odit sed harum suscipit voluptas
        dolores! Voluptatibus architecto tenetur alias, iste consequuntur
        dolore, maxime ratione nulla laboriosam quia illum reiciendis
        exercitationem adipisci modi repellat? Distinctio molestiae consectetur
        non ut maiores, et quam itaque corrupti cumque enim perferendis, quos
        nulla aperiam aspernatur. Eum ut sit molestias soluta est voluptatibus
        pariatur facere?
      </p>

      <div className="flex gap-4">
        {tags.map((tag, index) =>
        <p key={index} className="bg-white shadow-sm p-2 font-bold rounded-xl text-gray-400 text-md">
          {tag}
        </p>
        )}
      </div>
    </div>
  );
};

export default ArticleBody;
