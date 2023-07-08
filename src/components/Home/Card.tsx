interface CardProps {
  title: string;
  description: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, description, image }) => (
  <>
    <div className="bg-white laptop:w-[354px] laptop:h-[259px]">
      <div className="p-10 flex items-center justify-center flex-col gap-[22px]">
        <img src={image} alt="" />
        <div className="flex flex-col items-center gap-6">
          <h1 className="uppercase font-sans font-bold text-2xl text-overlay">
            {title}
          </h1>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  </>
);
