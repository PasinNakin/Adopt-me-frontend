import React from "react";
import DogCard from "../../../components/DogCard";
import useDog from "../../../hooks/use-dog";
import Pagination from "../../../components/Pagination";

export default function DogContainer() {
    const {
        searchDog,
        loading,
        error,
        pageNumbers,
        paginate,
        currentPage,
        dogInPage,
    } = useDog();

    // console.log(dogInPage);

    const NotFoundClass = `container grid min-h-dvh p-16 bg-[#1D2144] rounded-badge`;

    if (loading) {
        return (
            <div className=" flex items-center justify-center w-full h-[50vh] bg-[#1D2144] rounded-badge ">
                <span className="loading loading-spinner loading-lg "></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className={NotFoundClass}>
                <span className="text-red-500 text-center w-full">
                    {error.message}
                </span>
            </div>
        );
    }

    const filterSearchDogs = searchDog.filter((el) => el.status !== "ADOPTED"); //fix null container when all searchDog=ADOPTED

    if (searchDog.length !== 0) {
        if (filterSearchDogs.length === 0) {
            return (
                <div className={NotFoundClass}>
                    <span className="text-red-500 text-center w-full">
                        Your search not found.
                    </span>
                </div>
            );
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="container grid grid-cols-4 gap-y-10 min-h-screen p-16 bg-[#1D2144] rounded-badge">
                {searchDog.length !== 0
                    ? filterSearchDogs?.map((el) => {
                          if (el.status === "PENDING") {
                              return (
                                  <DogCard
                                      status="pending"
                                      color="bg-orange-400"
                                      key={el.id}
                                      src={el.profileImage}
                                      dogId={el.id}
                                      dogName={el.name}
                                  />
                              );
                          }
                          return (
                              <DogCard
                                  key={el.id}
                                  src={el.profileImage}
                                  dogId={el.id}
                                  dogName={el.name}
                              />
                          );
                      })
                    : dogInPage.map((el) => {
                          if (el.status === "PENDING") {
                              return (
                                  <DogCard
                                      status="pending"
                                      color="bg-orange-400"
                                      key={el.id}
                                      src={el.profileImage}
                                      dogId={el.id}
                                      dogName={el.name}
                                  />
                              );
                          }
                          return (
                              <DogCard
                                  key={el.id}
                                  src={el.profileImage}
                                  dogId={el.id}
                                  dogName={el.name}
                              />
                          );
                      })}
            </div>
            {filterSearchDogs.length === 0 && pageNumbers.length > 1 && (
                <Pagination
                    pageNumbers={pageNumbers}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            )}
        </div>
    );
}
