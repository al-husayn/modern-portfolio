const AuthorCard = ({ name, avatar }: { name: string; avatar: string }) => {
  return (
    <div className="flex items-center mb-8 space-x-4">
      <img
        alt={name}
        className="object-cover w-12 h-12 rounded-full"
        src={avatar}
        />
        <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">Author</p>
        </div>
    </div>
    );
}

export default AuthorCard;