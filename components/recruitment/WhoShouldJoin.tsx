import MaxWidth from '@components/layout/MaxWidth';

const WhoShouldJoin = () => {
  return (
    <MaxWidth>
      <div className="section-my pb-0 ">
        <h2 className=" mb-10 text-h2 font-bold">Who Should Join Us?</h2>
        <p className=" text-xl lg:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illum
          illo nisi quas odit, commodi necessitatibus! Assumenda, alias
          accusantium! Earum enim provident ea facere. Qui doloremque sed
          dignissimos corrupti error provident ducimus, rerum aliquid quod.
        </p>
        <a
          href="https://nusfintechsociety.notion.site/NUS-Fintech-Society-Recruitment-AY22-23-af1705d6afe44e9ca1c72c83d6e34c82"
          className="mx-auto mt-16 flex h-16 w-40 items-center justify-center rounded-lg bg-secondary text-xl font-bold text-white lg:h-20 lg:w-56 lg:text-3xl "
        >
          Apply Now
        </a>
      </div>
    </MaxWidth>
  );
};

export default WhoShouldJoin;
