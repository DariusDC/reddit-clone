import DataLoader from "dataloader";
import { Updoot } from "./../entities/Updoot";

export const createVoteStatusLoader = () => {
  return new DataLoader<{ postId: number; userId: number }, Updoot | null>(
    async (keys) => {
      const updoots = await Updoot.findByIds(keys as any);
      const updootIdsToUpdoot: Record<string, Updoot> = {};

      updoots.forEach((u) => {
        updootIdsToUpdoot[`${u.userId}|${u.postId}`] = u;
      });

      return keys.map(
        (key) => updootIdsToUpdoot[`${key.userId}|${key.postId}`]
      );
    }
  );
};
