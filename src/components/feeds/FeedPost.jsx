export const FeedPost = () => {
    return (
        <div className=" flex w-full justify-start border-b border-black">
            <div className="flex justify-center gap-3 mt-3 w-[570px]">
                <div>
                    <img src="/user.png" alt="Image tp profile" className="w-14 h-14 bg-slate-400 rounded-full" />
                </div>
                <form action="form" className="flex flex-col gap-3 h-52">
                    <textarea name="" id="" className="border border-gray-200 rounded-xl w-[450px] p-3 h-20 resize-none" placeholder="En que piensas ?" ></textarea>
                    <button action="form" className="w-20 h-10 bg-[#B25CD6] rounded-xl text-white">Postear</button>
                    <div className="border-black border-b pb-3"></div>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </a>
                </form>
            </div>
        </div>
    )
}

