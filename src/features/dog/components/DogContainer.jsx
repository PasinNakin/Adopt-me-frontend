import React from "react";
import DogCard from "../../../components/DogCard";
import useDog from "../../../hooks/use-dog";
import Pagination from "../../../components/Pagination";
import Spinner from "../../../components/Spinner";

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

    const NotFoundClass = `container grid min-h-dvh p-16 bg-[#1D2144] rounded-badge`;

    if (loading) {
        return (
            <div className=" flex items-center justify-center w-full h-[50vh] bg-[#1D2144] rounded-badge ">
                <Spinner />
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

    return (
        <div className="flex flex-col gap-5">
            <div className="container grid grid-cols-4 gap-y-10 min-h-[32rem] p-16 bg-[#1D2144] rounded-badge">
                {searchDog.length !== 0
                    ? searchDog?.map((el) => {
                          return (
                              <DogCard
                                  status={
                                      el.status === "PENDING"
                                          ? "Reserved"
                                          : null
                                  }
                                  color={
                                      el.status === "PENDING"
                                          ? "bg-orange-400"
                                          : null
                                  }
                                  key={el.id}
                                  src={el.profileImage}
                                  dogId={el.id}
                                  dogName={el.name}
                              />
                          );
                      })
                    : dogInPage.map((el) => {
                          return (
                              <DogCard
                                  status={
                                      el.status === "PENDING"
                                          ? "Reserved"
                                          : null
                                  }
                                  color={
                                      el.status === "PENDING"
                                          ? "bg-orange-400"
                                          : null
                                  }
                                  key={el.id}
                                  src={el.profileImage}
                                  dogId={el.id}
                                  dogName={el.name}
                              />
                          );
                      })}
            </div>
            {searchDog.length === 0 && pageNumbers.length > 1 && (
                <Pagination
                    pageNumbers={pageNumbers}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            )}
        </div>
    );
}
