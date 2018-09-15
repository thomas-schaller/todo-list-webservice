export class Task {
id?: number;
title: string;
description?: string;
priority?: number;
done: boolean;
subTasks?: Task[];
dueDate?: Date;
}
