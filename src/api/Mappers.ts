import { Award } from './Award';
import { Comment } from './Comment';
import { Post } from './Post';

export const mapAward = (award: any): Award => {
    return {
        id: award.id,
        coinPrice: award.coin_price,
        count: award.count,
        iconUrl: award.icon_url,
        name: award.name,
        description: award.description
    };
};

export const mapPost = (post: any): Post => {
    return {
        id: post.id,
        title: post.title,
        subredditNamePrefixed: post.subreddit_name_prefixed,
        allAwardings: post.all_awardings.map(mapAward)
    };
};

export const mapComment = (comment: any): Comment => {
    return {
        id: comment.id,
        body: comment.body,
        subredditNamePrefixed: comment.subreddit_name_prefixed,
        allAwardings: comment.all_awardings.map(mapAward)
    };
};