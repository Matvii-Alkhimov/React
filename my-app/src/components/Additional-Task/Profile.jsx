import { 
    ProfileCont,
    DescriptionCont,
    ProfileAvatar, 
    ProfileDescription, 
    ProfileUsername,
    StatsList,
    StatsItem,
    StatsText,
    StatsValue
 } from "./Profile.styled"

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats
}) => {
    return (
        <ProfileCont>
            <DescriptionCont>
                <ProfileAvatar src={avatar} alt="User avatar" />
                <ProfileUsername>{username}</ProfileUsername>
                <ProfileDescription>@{tag}</ProfileDescription>
                <ProfileDescription>{location}</ProfileDescription>
            </DescriptionCont>
            <StatsList>
                <StatsItem>
                    <StatsText>Followers</StatsText>
                    <StatsValue>{stats.followers}</StatsValue>
                </StatsItem>
                <StatsItem>
                    <StatsText>Views</StatsText>
                    <StatsValue>{stats.views}</StatsValue>
                </StatsItem>
                <StatsItem>
                    <StatsText>Likes</StatsText>
                    <StatsValue>{stats.likes}</StatsValue>
                </StatsItem>
            </StatsList>
        </ProfileCont>
    )
}