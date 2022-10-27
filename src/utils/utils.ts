
export const parseError = (args: { error: Error; pretty?: boolean }) => {
    const { error, pretty } = args || {};

    const parser = (key: string, value: unknown) => {
        if (value instanceof Error) {
            const e = {} as Error;

            Object.getOwnPropertyNames(value).forEach((propName) => {
                e[propName] =
                    propName === 'stack'
                        ? value[propName]
                              .trim()
                              .split('\n')
                              .map((l: string) => l.trim())
                              .filter((l: string) => !l.includes('node_modules'))
                              .flatMap((l: string) => /src.*?[\w|\d|/|.|:]+/.exec(l) || [])
                        : value[propName];
            });

            return Object.fromEntries(
                Object.entries({
                    message: e.message,
                    stack: e.stack,
                    cause: e.cause,
                })
            );
        }

        return value;
    };

    const getFullErrorMessage = (obj: Error, msg?: string) => {
        const message = { value: msg || '' };

        if (obj.message) {
            message.value += message.value ? `: ${obj.message}` : obj.message;
        }

        if (obj.cause) {
            return getFullErrorMessage(obj.cause as Error, message.value);
        }

        return message.value.trim();
    };

    const result = JSON.parse(JSON.stringify(error, parser));

    const response = { ...result, message: getFullErrorMessage(result) };

    return pretty ? JSON.stringify(response, null, 2) : response;
};




