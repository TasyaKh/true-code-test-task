import axiosInstance from "./axiosInstance";

export const getContentBySlug = async (slug: string) => {
    const {data} = await axiosInstance.get(`/wp-json/wp/v2/pages?slug=${slug}`);
    return data[0].acf;
};


export const getMainPageContent = async () => {
    return getContentBySlug("vacancies")

};

export const getWeOffers = async () => {
    return getContentBySlug("weofferspage")

};

export const getRulesContent = async () => {
    return getContentBySlug("rulespage")
};

export const getWhoWePage= async () => {
    return getContentBySlug("whowepage")
};

export const getReviewsPage= async () => {
    return getContentBySlug("reviewspage")
};

export const getErrorPage= async () => {
    return getContentBySlug("errorpage")
};

export const getAllVacancies= async () => {
    return getContentBySlug("all-vacancies")
};



// components
export const getFooterContent = async () => {
    return getContentBySlug("footer")
};

export const getHeaderContent = async () => {
    return getContentBySlug("header")
};



