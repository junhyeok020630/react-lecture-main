import React from "react";

function Page(props) {
    const user = props.user;
    const userLink = (
        <Link href={user.permalink}>
            <Avatar user = {user} size = {avatarSize}/>
        </Link>
    );

    return (
        <PageLayout userLink={userLink}/>
    );
}

export default Page;